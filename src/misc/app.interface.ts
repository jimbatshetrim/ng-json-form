interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
}

export interface JsonFormControls {
    name: string;
    value: string;
    validators: JsonFormValidators;
}

export interface JsonFormData {
    controls: JsonFormControls[];
}