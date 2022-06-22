import printValue from "yup/lib/util/printValue";

export let mixed = {
    default: "содержит ошибку",
    required: "обязательно для заполнения",
    defined: '${path} должен быть определен',
    oneOf: "должен содержать одно из следующих значение: ${values}",
    notOneOf: "не должен содержать одно из следующих значение: ${values}",
    notType: ({ path, type, value, originalValue }) => {
        let isCast = originalValue != null && originalValue !== value;
        let msg =
            `${path} должен быть \`${type}\` типом, ` +
            `но финальное значение: \`${printValue(value, true)}\`` +
            (isCast
                ? ` (приведено из значения \`${printValue(originalValue, true)}\`).`
                : ".");

        if (value === null) {
            msg += `\n Если "null" является пустым значением, убедитесь что схема помечена как \`.nullable()\``;
        }

        return msg;
    },
    notNull: "${path} не может быть null"
};

export let string = {
    length: "длина должна иметь ${length} символов",
    min: "должен содержать минимум ${min} символов",
    max: "должен содержать не более ${max} символов",
    matches: '${path} должен совпадать со следующим регулярном выражением: "${regex}"',
    email: "должен быть email",
    url: "значение должно быть валидной ссылкой",
    uuid: "значение должно быть валидными UUID",
    trim: "поле не должно содержать в начале или в конце пробелы",
    lowercase: "значение должно быть в нижним регистре",
    uppercase: "значение должно быть в верхнем регистре"
};

export let number = {
    min: "значение должно быть больше или равно ${min}",
    max: "значение должно быть меньше или равно ${max}",
    lessThan: "значение должно быть меньше чем ${less}",
    moreThan: "значение должно быть больше ${more}",
    notEqual: "значение не должно быть равно ${notEqual}",
    positive: "значение должно быть положительном числом",
    negative: "значение должно быть негативном числом",
    integer: "значение должно быть целым числом"
};

export let date = {
    min: "Дата не может быть меньше начальной",
    max: "Дата не может быть больше конечной"
};

export let boolean = {
    isValue: "должно иметь значение: ${value}",
};

export let object = {
    noUnknown: "${path} field cannot have keys not specified in the object shape"
};

export let array = {
    min: "в поле должно быть указано не менее ${min} элементов",
    max: "в поле должно быть указано не более ${max} элементов",
    length: "должен иметь ${length} элементов",
};

export default Object.assign(Object.create(null), {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean
})
