import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Footer = () => {
  const [openMap, setOpenMap] = useState<boolean>(false);

  return (
    <div className='bg-light relative'>
      <div className='text-blue flex flex-col items-center justify-center px-4'>
        <h2 className='text-6xl text-dark display-font font-semibold py-8'>
          PRBC
        </h2>
        <table className='table-fixed mb-8 w-80'>
          <tbody>
            <tr>
              <td className='text-dark'>Monday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td className='text-dark'>Tuesday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td className='text-dark'>Wednesday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
            <tr>
              <td className='text-dark'>Thursday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
            <tr>
              <td className='text-dark'>Friday</td>
              <td>1:00pm - late</td>
            </tr>
            <tr>
              <td className='text-dark'>Saturday</td>
              <td>1:00pm - late</td>
            </tr>
            <tr>
              <td className='text-dark'>Sunday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
          </tbody>
        </table>

        <div className='flex'>
          <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F642402229175922%2F'>
            <FontAwesomeIcon icon={faFacebookSquare} size='4x' />
          </a>
        </div>
      </div>

      <p
        className='text-center text-dark text-lg px-4 pb-20 py-4'
      >
        If you&apos;d like to contact us, please feel free to give us a call at{' '}
        <span className='text-blue'>(02) 6862 2772</span>.
      </p>
    </div>
  );
};

export default Footer;
