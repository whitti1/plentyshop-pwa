import type { PaymentProviders } from '@plentymarkets/plentymarkets-sdk/packages/api-client/src';

export interface UsePaymentMethodsState {
  data: PaymentProviders;
  loading: boolean;
}

export type FetchPaymentMethods = () => Promise<PaymentProviders>;
export type SavePaymentMethod = (paymentMethodId: number) => Promise<void>;

export interface UsePaymentMethods {
  data: Readonly<Ref<UsePaymentMethodsState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchPaymentMethods: FetchPaymentMethods;
  savePaymentMethod: SavePaymentMethod;
}

export type UsePaymentMethodsReturn = () => UsePaymentMethods;
