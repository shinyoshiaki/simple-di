export default function dependencyInjection<U extends {
    [key: string]: any;
}>(inject: U): { [key in keyof U]: InstanceType<U[key]>; };
