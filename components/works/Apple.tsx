import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
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
            href="https://nextbridge.com/"
            target="_blank"
          >
          @Nextbridge
          </a>
          </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        (2010 - 2014)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I worked as PDF/HTML form developer to build solutions for MasterControl product.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as Javascript, jQuery, HTML, DHTML, CSS, PDF Script, Yii, MySQL, Accessibility, SVN, PHP, VB.Net.
        </li>
        <li className="text-base flex-column gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {/* <TiArrowForward /> */}
          </span>
          <b className="text-textGreen">

          Roles & Rsesponsibilities
            </b>
           <br />
          
           Maintained task(s) in Buzilla for MasterControl. <br />
           Resolved bugs within e-solutions for MasterControl. <br />
           Performed Accessibility for forms (HTML/PDF). <br />
           Managed UI/UX for forms. <br />
           Created Rest API's with Yii & MySQL. <br />
           Created Desktop App for MasterControl SOAP XML verification in VB.Net.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
