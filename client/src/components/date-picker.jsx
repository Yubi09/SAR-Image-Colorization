import 'antd/dist/antd.min.css';
import { DatePicker } from "antd"



const  = ({ className="" }) => {
  return (
    <DatePicker className={`w-full relative ${className}`} placeholder="Select date" allowClear={false} bordered={false} />);
};

export default ;
