import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Full-stack / Senior Software Engineer
        <span className="text-textGreen tracking-wide">
        <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.ssidecisions.com/"
            target="_blank"
          >
          @Strategic Systems International
          </a>
          </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        (2014 - 2017)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I worked in different teams and manage different projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and content management systems such as Javascript, jQuery, HTML, DHTML, CSS, MySQL, PHP, laravel, codeigniter.
        </li>
        <li className="text-base flex-column gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {/* <TiArrowForward /> */}
          </span>
          <b className="text-textGreen">

          Roles & Rsesponsibilities
            </b>
           <br />
          
           Manage KPI module for HBI (Healthcare business insights). <br />
           Manage cron jobs for generating data for reporting for HBI (Healthcare business insights). <br />
           Resolve bugs within HBI. <br />
           SEO for home website. <br />
           Status meetings. <br />
           Manage UI/UX. <br />
           Manage subordinates for HBI. <br />
           Created process solutions for Jobrouter.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
