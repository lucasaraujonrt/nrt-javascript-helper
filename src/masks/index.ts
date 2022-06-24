import Masker from "vanilla-masker";

export const maskPhone = (value: string = "") =>
  value ? Masker.toPattern(value, "(99) 99999-9999") : "";

export const maskCpf = (value: string) =>
  value ? Masker.toPattern(value, "999.999.999-99") : "";

export const unmaskField = (value: any) =>
  value ? value.replace(/\D/g, "") : "";

export const maskCnpj = (value: string) =>
  value ? Masker.toPattern(value, "99.999.999/9999-99") : "";

export const maskDate = (value: string | null | undefined) =>
  value ? Masker.toPattern(value, "99/99/9999") : "";

export const maskTime = (value: string | null | undefined) =>
  value ? Masker.toPattern(value, "99:99") : "";

export const maskDateTime = (value: string) =>
  value ? Masker.toPattern(value, "99/99/9999 99:99") : "";

/**
 * It takes a string and replaces all non-digits with an empty string, then replaces the first two
 * digits with a parenthesis, then replaces the next three digits with a space, then replaces the next
 * @param {string} value - string - The value of the input
 */
export const phoneMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5}|\d{4})\D*(\d{4})/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
    : "";
