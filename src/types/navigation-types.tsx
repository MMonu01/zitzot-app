export type RootStackParamList = {
  Home: undefined;
  Details: {product_id: string} | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
