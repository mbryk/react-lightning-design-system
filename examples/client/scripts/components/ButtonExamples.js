import React from 'react';

import { Button } from 'react-lightning-design-system';

export default class ButtonExamples extends React.Component {
  render() {
    const styles = { padding: '12px' };
    const click = () => alert('Clicked');
    const headingClass = 'slds-p-top--large';
    return (
      <div>
        <h2 className={ headingClass }>Buttons</h2>
        <div style={ styles }>
          <Button onClick={ click }>Simple</Button>
          <Button type='neutral' onClick={ click }>Neutral</Button>
          <Button type='brand' onClick={ click }>Brand</Button>
          <Button type='neutral' icon='download' iconAlign='left' onClick={ click }>Icon #1</Button>
          <Button type='neutral' disabled>Disabled Neutral</Button>
          <Button type='brand' disabled>Disabled Brand</Button>
        </div>
        <h2 className={ headingClass }>Buttons Inverse</h2>
        <div style={ { backgroundColor: '#16325c', ...styles } }>
          <Button inverse onClick={ click }>Simple</Button>
          <Button inverse type='neutral' onClick={ click }>Neutral</Button>
          <Button inverse type='brand' onClick={ click }>Brand</Button>
          <Button inverse type='neutral' icon='download' iconAlign='left' onClick={ click }>Icon #1</Button>
          <Button inverse type='neutral' disabled>Disabled Neutral</Button>
          <Button inverse type='brand' disabled>Disabled Brand</Button>
        </div>
        <h2 className={ headingClass }>Icon Buttons</h2>
        <div style={ styles }>
          <Button type='icon-bear' icon='settings' />
          <Button type='icon-bear' icon='settings' disabled />
          <Button type='icon-container' icon='settings' />
          <Button type='icon-container' icon='settings' disabled />
          <Button type='icon-border' icon='settings' />
          <Button type='icon-border' icon='settings' disabled />
          <Button type='icon-border-filled' icon='settings' />
          <Button type='icon-border-filled' icon='settings' disabled />
        </div>
        <h2 className={ headingClass }>Icon Buttons Inverse</h2>
        <div style={ { backgroundColor: '#16325c', ...styles } }>
          <Button type='icon-inverse' icon='settings' />
          <Button type='icon-inverse' icon='settings' disabled />
        </div>
      </div>
    );
  }
}