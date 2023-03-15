'use client';

import type { FormEventHandler } from 'react';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Trans from '~/core/ui/Trans';

import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import If from '~/core/ui/If';
import Alert from '~/core/ui/Alert';
import useSignInWithOtp from '~/core/hooks/use-sign-in-with-otp';
import configuration from '~/configuration';

const EmailLinkAuth: React.FC = () => {
  const { t } = useTranslation();
  const signInWithOtpMutation = useSignInWithOtp();

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      const target = event.currentTarget;
      const data = new FormData(target);
      const email = data.get('email') as string;

      const origin = window.location.origin;
      const redirectUrl = [origin, configuration.paths.signInFromLink].join('');

      const promise = signInWithOtpMutation.trigger({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      await toast.promise(promise, {
        loading: t<string>('auth:sendingEmailLink'),
        success: t<string>(`auth:sendLinkSuccessToast`),
        error: t<string>(`auth:errors.link`),
      });
    },
    [signInWithOtpMutation, t]
  );

  if (signInWithOtpMutation.data) {
    return (
      <Alert type={'success'}>
        <Trans i18nKey={'auth:sendLinkSuccess'} />
      </Alert>
    );
  }

  return (
    <form className={'w-full'} onSubmit={onSubmit}>
      <div className={'flex flex-col space-y-4'}>
        <TextField>
          <TextField.Label>
            <Trans i18nKey={'common:emailAddress'} />

            <TextField.Input
              data-cy={'email-input'}
              required
              type="email"
              placeholder={'your@email.com'}
              name={'email'}
            />
          </TextField.Label>
        </TextField>

        <Button loading={signInWithOtpMutation.isMutating}>
          <If
            condition={signInWithOtpMutation.isMutating}
            fallback={<Trans i18nKey={'auth:sendEmailLink'} />}
          >
            <Trans i18nKey={'auth:sendingEmailLink'} />
          </If>
        </Button>
      </div>

      <If condition={signInWithOtpMutation.error}>
        <Alert type={'error'}>
          <Trans i18nKey={'auth:errors.link'} />
        </Alert>
      </If>
    </form>
  );
};

export default EmailLinkAuth;
