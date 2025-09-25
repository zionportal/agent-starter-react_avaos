import { App } from '@/components/app';
import { getAppConfig } from '@/lib/server-utils';

export default async function Page() {
  const appConfig = await getAppConfig();

  return <App appConfig={appConfig} />;
}
