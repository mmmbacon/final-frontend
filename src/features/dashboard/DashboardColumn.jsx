import React from 'react';
import PropTypes from 'prop-types';

// React Components
import { Box } from '@material-ui/core';
import DashboardColumnHeading from './DashboardColumnHeading';
import JobItem from '../../components/JobItem';

// Custom Components

const DashboardColumn = (props) => {
  const { title, color, items } = props;
  const jobItems = items.map((item) => (
    <JobItem
      id={item.id}
      company={item.company}
      title={item.title}
      description={item.details}
      location={item.location}
      salary={item.salary}
      status={item.status}
      url={item.url}
      contact_name={item.contact_name}
      contact_phone={item.contact_phone}
      contact_email={item.contact_email}
      contact_socialmedia={item.contact_socialmedia}
    />
  ));

  return (
    <Box width={1}>
      <DashboardColumnHeading title={title} color={color} />
      {jobItems}
    </Box>
  );
};

DashboardColumn.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

DashboardColumn.defaultProps = {
  title: 'Category',
  color: '#ee6a7c',
  items: [{
    company: 'Facebook',
    title: 'Full-Stack Web Developer',
    description: 'Full Time, Remote',
    location: 'Calgary, AB',
  }],
};

export default DashboardColumn;
