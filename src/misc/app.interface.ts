interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
}

interface JsonFormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
}

interface JsonFormControls {
    name: string;
    label: string;
    value: string;
    type: string;
    options?: JsonFormControlOptions;
    required: boolean;
    validators: JsonFormValidators;
}

export interface JsonFormData {
    controls: JsonFormControls[];
}