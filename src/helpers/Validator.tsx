import { BuyflowData } from "../interfaces/buyflow.interface";

export const validate = (formData: BuyflowData) => {
    return Object.values(formData).some(x => (x === null || x === ''));
}

export const isValidEmail = (email: string = "") => {
    return new RegExp('\\S+@\\S+\\.\\S+').test(email);
}