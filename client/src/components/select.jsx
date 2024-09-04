import 'antd/dist/antd.min.css';
import { Select } from "antd"



const  = ({ className="" }) => {
  return (
    <Select className={`w-full relative font-heading-heading-3 text-sm text-pagination-colortext ${className}`} placeholder="Select" filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            } virtual={false} showArrow={false}>{` `}</Select>);
};

export default ;
