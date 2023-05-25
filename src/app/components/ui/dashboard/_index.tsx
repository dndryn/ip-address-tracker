import React from 'react';
import Block from './Block';
import '@style/results'; // path: src\app\assets\scss\results.scss

//TODO: rename into dashboard and make it a custom element

const Dashboard = ({ data }): JSX.Element => {

  const head: string[] = ['IP address', 'location', 'timezone', 'isp'];
  return (
    <div id="results" className="is-flex">
      <Block heading="IP address" content={data.ip} />
      <Block
        heading="Location"
        content={`${data.city}, ${data.region}, ${data.postalcode}.`}
      />
      <Block heading="Timezone" content={data.timezone} />
      <Block heading="ISP" content={data.isp} />
    </div>
  );

  // const head: string[] = ['IP address', 'location', 'timezone', 'isp'];
  // const content: string[] = [Data.ip, Data && Data.location.city , Data && Data.location.timezone, Data.isp];
  // const blocks: JSX.Element[] = head.map(( block, i ) => {
  //   return (
  //     <Block
  //       heading={ block.toLocaleUpperCase() }
  //       content={ (Data) ? `${content[i]}` : '' }
  //       key={ block }
  //     >
  //       {block !== "IP address" && (
  //         <span className="results_block_separator" />
  //       )}
  //     </Block>
  //   );

  // });
};

export default Dashboard;