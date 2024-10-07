import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Engineer
        <span className="text-textGreen tracking-wide">
        <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.iqvia.com/locations/pakistan"
            target="_blank"
          >
          @IQVIS
          </a>
          </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        (2008 - 2010)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I worked as java & php developer in various projects.

In 2012 company was merged into IQVIS.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as Javascript, jQuery, HTML, DHTML, CSS, Java, PHP, Voice, XML, MySQL, MSSQL, Struts, JSP.
        </li>
        <li className="text-base flex-column gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {/* <TiArrowForward /> */}
          </span>
          <b className="text-textGreen">

          Roles & Rsesponsibilities
            </b>
           <br />
          
           Manage IPVX (Voice over IP system). <br />
           Create/Manage Voice XML. <br />
           Zencart theme integration. <br />
           Template creator for ILMX. 
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
