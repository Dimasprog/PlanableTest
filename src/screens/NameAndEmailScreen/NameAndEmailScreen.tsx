import { FC, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import { styles } from './NameAndEmailScreen.styles';
import { Controller, useForm } from 'react-hook-form';
import { emailInputRules } from '../../validations/emailInputRules';
import Button from '../../components/Button';

type UserData = {
  name: string;
  email: string;
};

const NameAndEmailScreen: FC = () => {
  const { control, handleSubmit, watch, clearErrors } = useForm<UserData>();

  const emailRef = useRef<TextInput | null>(null);

  const disabled = !(watch('name') || watch('email'));

  const resetErrorsWhen = (isError: boolean) => {
    if (isError) {
      clearErrors();
    }
  };

  const save = (data: UserData) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={150}
        style={styles.keyboardAvoidingView}>
        <View>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Name"
                placeholder="Your name"
                textContentType="name"
                autoCapitalize="words"
                autoComplete="name"
                returnKeyType="next"
                returnKeyLabel="next"
                onSubmitEditing={() => emailRef.current?.focus()}
                autoFocus
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState?.error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={emailInputRules}
            render={({ field, fieldState }) => (
              <Input
                ref={emailRef}
                label="Email"
                placeholder="Email address"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType={disabled ? undefined : 'done'}
                returnKeyLabel="return"
                blurOnSubmit={true}
                onChangeText={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                onFocus={() => resetErrorsWhen(!!fieldState?.error?.message)}
                error={fieldState?.error?.message}
                onSubmitEditing={handleSubmit(save)}
              />
            )}
          />
        </View>
        <Button disabled={disabled} onPress={handleSubmit(save)} title="Save" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NameAndEmailScreen;
