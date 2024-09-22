

function CustomizeReturn(dto:any) {
    return function (
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args:any[]) {
            const result = await originalMethod.apply(this, args);

            if (Array.isArray(result)) {
                return result.map(entity => new dto(entity));
            };

            return new dto(result);
        };

        return descriptor;
    };
};

export default CustomizeReturn;