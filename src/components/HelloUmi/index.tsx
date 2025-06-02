import type { FC } from "react";
import { getLocale, formatMessage } from "umi";

console.log('locale', getLocale());

const HelloUmi: FC =  () => {
  return <div>Hello Umi <span>{formatMessage({id: 'msg.id'})}</span></div>;
};
export { HelloUmi };