import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Senior Front-End Developer
        <span className="text-textGreen tracking-wide">
        <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://netshore.com/"
            target="_blank"
          >
          @Netshore
          </a></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        (2017 - 2024)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Part of Atea FE team working on eShop (B2B) e-commerce solution.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as Javascript, jQuery, HTML, DHTML, CSS, Vue, Grunt, Webpack, Less, Mustache, Ajax, Build, Jira, DevOps, Java, Npm, Git.
        </li>
        <li className="text-base flex-column gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {/* <TiArrowForward /> */}
          </span>
          
          
            <b className="text-textGreen">

          Roles & Rsesponsibilities
            </b>
           <br />
          
Create/Manage UI components. <br />
Resolve bugs. <br />
Product libraries version controling. <br />
Look in Exception portal (Kibana). <br />
Perform code reviews. <br />
Manage development build process (Webpack, grunt, rules, linting). <br />
Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis. 
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
