export default function dependencyInjection<U extends { [key: string]: any }>(
  inject: U
) {
  const di: { [key in keyof U]: InstanceType<U[key]> } = {} as any;

  Object.keys(inject).forEach(key => {
    (di as any)[key] = new (inject as any)[key]();
  });
  return di;
}
