import { ClientRequest } from "http"

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 50,
    fontFamily: 'Helvetica Neue',
    boxSizing: 'border-box',
    width: 650,
    margin: '0px auto'
  },
  h1: {
    textAlign: 'center'
  },
  ul: {
    listStyle: 'none',
    padding: 8,
  },
  li: {
    border: '1px solid #DDD',
    backgroundColor: '#888',
    padding: 16,
    display: 'inline-block',
    marginLeft: 8,
    marginBottom: 8,
    borderRadius: 8,
    width: '600px'
  },
  row: {
    width: '100%',
    display: 'flex',
    gap: 8
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  span: {
    margin: '0px 8px',
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    width: '120px',
  },
  span2: {
    margin: '8px',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 24,
    alignContent: 'center',
    width: 96,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    background: '#CCC',
    borderRadius: '4px',
    padding: '4px'
  },
  badge: {
    position: 'relative',
    left: 0,
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 12,
    alignContent: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    color: '#FFF',
    background: '#222',
    borderRadius: '4px',
    padding: '4px'
  },
  img: {
    float: 'left',
    marginRight: 5,
    width: 64,
    height: 64
  },
  p: {
    padding: '4px 8px'
  }
}

export default styles