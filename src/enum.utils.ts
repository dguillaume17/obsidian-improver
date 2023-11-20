export namespace EnumUtils {

    export function assertUnreachable(enumValue: never): never {
        throw new Error();
    }

}