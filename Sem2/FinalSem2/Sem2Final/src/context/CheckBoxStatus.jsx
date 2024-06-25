import { useState } from "react";

export const useCheckBox = () => {
    const [checkBox, setCheckBox] = useState(false);
    return {checkBox, setCheckBox};
}