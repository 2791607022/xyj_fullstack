import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import Loading from '../../baseUI/loading/index';

const Recommend = (props) => {
  const { enterLoading, recommendList,getRecommendListDataDispatch } = props;
  // console.log(props.enterLoading);
  useEffect(() => {
    getRecommendListDataDispatch();
  }, [])
  // console.log(recommendList, '++++++')
  const recommendListJS = recommendList?recommendList.toJS():[];
  return (
    <div>
      Recommend
      {enterLoading?<Loading />:null}
      {
        recommendListJS
          .map((item, index) => (
            <img key={index} src={item.picUrl}/>
          ))
      }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['recommend', 'recommendList']),
    // enterLoading: state.recommend.enterLoading
    enterLoading: state.getIn(['recommend', 'enterLoading'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendListDataDispatch() {
      dispatch(actionCreators.getRecommendList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);