import { validate } from "@/utils";
import { useEffect, useRef, useState } from "react";

export const useForm = (
  rules = {},
  { initialValue = {}, dependencies = {} } = {}
) => {
  //   dependencies: {
  // password: ["confirmPassword"],
  // },
  const [form, setForm] = useState(initialValue);
  useEffect(() => {
    setForm(initialValue);
  }, [JSON.stringify(initialValue)]);
  const [errors, setErrors] = useState({});

  const formRef = useRef();
  const register = (name) => {
    return {
      error: errors?.[name] || "",
      value: form?.[name] || "",
      id: name,
      name,
      onChange: (value) => {
        let _form = { ...form, [name]: value }; //cập nhật giá trị mới nhất
        if (Array.isArray(rules[name]) && rules[name].length > 0) {
          const errObj = {};
          errObj[name] = validate(
            {
              [name]: rules[name],
            },
            _form
          )[name]; //validate trong lúc nhập data
          setErrors((error) => ({ ...error, [name]: "" })); //mất error khi nhập

          if (
            Array.isArray(dependencies[name]) &&
            dependencies[name].length > 0
          ) {
            for (const dependency of dependencies[name]) {
              // ===== validate lúc đang nhập data =====
              if (_form[dependency]?.trim()) {
                //===chỉ validate khi có dữ liệu===
                errObj[dependency] = validate(
                  { [dependency]: rules[dependency] },
                  _form
                )[dependency];
                setErrors((error) => ({
                  ...error,
                  [dependency]: errObj[dependency],
                }));
              }
            }
          }
        }
        setForm((form) => ({ ...form, [name]: value }));
      },
    };
  };

  const _validate = () => {
    const errorObject = validate(rules, form);
    if (errorObject) {
      setErrors(errorObject);
      if (formRef.current && Object.keys(errorObject).length > 0) {
        const fieldName = Object.keys(errorObject);
        formRef.current.querySelector(`input[name=${fieldName[0]}]`)?.focus();
      }

      return Object.keys(errorObject).length === 0;
    }
  };

  const reset = () => {
    setForm({});
  };

  return {
    form,
    errors,
    register,
    validate: _validate,
    reset,
    formRef,
    setForm,
  };
};
