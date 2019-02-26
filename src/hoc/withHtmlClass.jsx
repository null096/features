import React from 'react';

const withHtmlClass = (classes) => {
  const parsedClasses = classes.split(/\s/);

  return (Component) => class extends React.Component {
    componentDidMount() {
      const htmlClasses = this.getHtmlClasses();
      const parsedHtmlClasses = htmlClasses.split(/\s/);

      parsedClasses.forEach(cl => {
        if (!parsedHtmlClasses.includes(cl)) {
          parsedHtmlClasses.push(cl);
        }
      });
      document.documentElement.className = parsedHtmlClasses.join(' ').trim();
    }
    componentWillUnmount() {
      const htmlClasses = this.getHtmlClasses();
      let parsedHtmlClasses = htmlClasses.split(/\s/);

      parsedHtmlClasses = parsedHtmlClasses.filter(cl => !parsedClasses.includes(cl));
      document.documentElement.className = parsedHtmlClasses.join(' ').trim();
    }
    getHtmlClasses() {
      return document.documentElement.className;
    }
    render() {
      return <Component {...this.props}/>
    }
  };
};

export default withHtmlClass;
