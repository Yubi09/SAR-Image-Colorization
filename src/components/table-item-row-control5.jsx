import 'antd/dist/antd.min.css';
import { Checkbox } from "antd"



const  = ({ className="" }) => {
  return (
    <div className={`h-full relative bg-border-alternate border-table-colorsplit border-[1px] border-solid box-border w-full flex flex-row items-center justify-center p-table-padding ${className}`}>
      <Checkbox className="w-4">Checkbox</Checkbox>
    </div>);
};

export default ;
