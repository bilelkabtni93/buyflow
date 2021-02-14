export const validate = (formData: any) => {
    console.log("fsdfs",  formData)
    return Object.values(formData).some(x => (x === null || x === ''));
}