import styled from 'styled-components';

const styles = {};

styles.div = styled.div`
padding: 20,
flex: 1,
flexDirection: 'column',
justify-content: space-between;
  font: bold 12px/20px arial;
  padding: 5px 8px;
  background: #efefef;
  border: solid 1px black;
`;

styles.parent = styled.div`
padding: 20,
flex: 1,
flexDirection: 'row',
`;

export default styles;
