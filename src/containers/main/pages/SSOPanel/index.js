import
React,
{
  useEffect
}
  from 'react';
import { useDispatch, useSelector } from 'react-redux'

import V1 from '../../../v1'

const SSOPanel = (props) => {

  // const user = useSelector(state => state.user);
  // const userStages = user.stages && user.stages.map(s => s.stage)
  // const stage = userStages ? (userStages.includes('V2') && 'V2') || 'V1' : 'UNKNOWN' // user can have 1 or more stages. v2 takes precendence over v1

  // const uid = user.uid;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   switch (stage) {
  //     default: {
  //       break;
  //     }
  //   }
  // }, [dispatch, uid, stage])

  // const renderContainer = () => {
  //   switch (stage) {
  //     default: {
  //       return null;
  //     }
  //   }
  // }
  const renderContainer = () => {
    console.log("render container")
    return <V1/>
  }

  return (
    <div>
      {renderContainer()}

    </div>
  )

}

export default SSOPanel