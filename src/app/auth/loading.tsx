import PageLoadingIndicator from '~/core/ui/PageLoadingIndicator';

function Loading() {
  return (
    <div className={'flex h-full items-center py-8'}>
      <PageLoadingIndicator displayLogo={false} fullPage={false} />
    </div>
  );
}

export default Loading;
