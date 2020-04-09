import moment from 'moment';
import React from 'react';
import AvatarEditor from 'react-avatar-editor'
import Slider from 'rc-slider';
import { FiCamera } from 'react-icons/fi';
import { MdClose } from 'react-icons/md'

class MediaOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.addImage = this.addImage.bind(this);
    this.getCroppedImg = this.getCroppedImg.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.onSelectFile = this.onSelectFile.bind(this);
    this.state = {
        address: '',
        endDate: moment(new Date()),
        loading: false,
        startDate: moment(new Date()),
        view: 'boutIts',
        crop: {
          aspect: 9/16,
          x: 0,
          y: 0,
          height: 400
        },
        croppedImageUrl: null,
        file: null,
        overlay: 'category',
        picture: null,
        src: null
    }
  }

  addImage(){
     const blob = this.state.croppedImageUrl;
     var file_reader = new FileReader();
     file_reader.readAsDataURL(blob);
    //  file_reader.onload = function () {
    //     var data = file_reader.result
        // Meteor.call('addProfilePhoto', data, function(err,resp){
        //   if(err){
        //     console.log(err)
        //   }else{
        //     _this.setState({overlay_visible: false})
        //   }
        // })
    //  };
     file_reader.onerror = function (error) {
       console.log('Error: ', error);
     };
  }

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount(){
      document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  onSelectFile(e){
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  handleFileUpload(event){
     const file = event.target.files[0];
     var file_reader = new FileReader();
     file_reader.readAsDataURL(file);
     file_reader.onload = function () {
        // var data = file_reader.result
        // Meteor.call('boutit.image', data, function(err,resp){
        //   if(err){
        //     console.log(err)
        //   }else{
        //     const pic_url = resp['Location']
        //     _this.setState({picture: pic_url})
        //   }
        // })
     };
     file_reader.onerror = function (error) {
       console.log('Error: ', error);
     };
  }

  saveCrop(){
    this.props.uiLoadingToggle('photo', true)
    this.makeClientCrop();
  }

  async makeClientCrop() {
    const _this = this;
    if (_this.editor) {
      const croppedImageUrl = await _this.getCroppedImg();
      var file_reader = new FileReader();
      file_reader.readAsDataURL(croppedImageUrl);
      file_reader.onload = function () {
         var data = file_reader.result
         _this.props.addBoutItPhoto(data)
      };
      file_reader.onerror = function (error) {
        this.props.uiLoadingToggle('photo', false)
      };
    }
  }


  getCroppedImg() {
    const canvasScaled = this.editor.getImageScaledToCanvas()
    return new Promise((resolve, reject) => {
      canvasScaled.toBlob(blob => {
        if (!blob) {
          return;
        }
        resolve(blob);
      }, 'image/jpeg');
    });
  }


setEditorRef = (editor) => this.editor = editor

  render() {
    const {state} = this.props;
    return (
      <div className="width-100 height-100 centered flex-col">
          <div className="height-95 width-90 max-width-500 background-white flex-col radius-10 overflow-hidden">
              <div className="height-70p flex-row width-100 space-between centered padding-horizontal-20 background-transparent">
                  <div className="flex-33">
                    <FiCamera className="text-30 text-grey" />
                  </div>
                  <div className="flex-33"></div>
                  <div className="flex-33 flex-row centered-vertical space-between">
                      <div></div>
                      <div className="flex-row centered">
                          <MdClose className="pointer-pink-text-hover text-30" onClick={() => this.props.showOverlay()} />
                      </div>
                  </div>
              </div>
              <div className="width-100 flex-col centered">
                  <div className="width-100 max-width-800 flex-col centered padding-top-30 padding-bottom-30">
                      <div className="width-100 max-width-800 min-width-800 centered flex-col">
                          <div className="margin-bottom-20">
                              <div className="background-black border-grey">
                              <AvatarEditor
                                  ref={this.setEditorRef}
                                  image={state.src}
                                  width={400}
                                  height={400}
                                  border={20}
                                  scale={state.scale}
                                  rotate={0}
                              />
                              </div>
                          </div>
                          <div className="max-width-200 width-100 margin-bottom-20">
                              <Slider
                                  activeDotStyle={{borderColor: 'rgba(247,78,130,1)'}}
                                  dotStyle={{borderColor: 'red'}}
                                  onChange={(value) => this.props.captureScale(value)}
                                  trackStyle={[{backgroundColor: 'rgba(247,78,130,1)'}]}
                                  min={0.5}
                                  max={2.0}
                                  step={0.1}
                                  value={state.scale}
                              />
                          </div>
                          {/* {(state.uiLoading.label === 'photo' && state.uiLoading.value === true) ?
                          <div className="create-button centered height-30p radius-5 padding-horizontal-10 max-width-100">
                              <ButtonLoading />
                          </div> :
                          <div className="create-button centered height-30p radius-5 padding-horizontal-10 max-width-100" onClick={() => this.saveCrop()}>
                              crop
                          </div>} */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default MediaOverlay;
