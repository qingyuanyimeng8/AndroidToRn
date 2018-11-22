import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

const headImg = require('../images/v3_default_header.png');
const vipImg = require('../images/v3_me_vip1.png');
const v3_me_eye_close = require('../images/v3_me_eye_close.png');
const v3_me_eye_open = require('../images/v3_me_eye_open.png');
const v3_me_arrow_right = require('../images/v3_me_arrow_right.png');
const v3_me_arrows = require('../images/v3_me_arrows.png');
const v3_me_help = require('../images/v3_me_help.png');
const v3_mine_loan = require('../images/v3_mine_loan.png');
const v3_ransaction_record = require('../images/v3_ransaction_record.png');
const v3_icon_notice = require('../images/v3_icon_notice.png');
const network_config = require('../images/network_config.png');
const v3_invite = require('../images/v3_invite.png');
const v3_message_center = require('../images/v3_message_center.png');
const icon_setting_white = require('../images/icon_setting_white.png');
const v3_yestoday_earnings = require('../images/v3_yestoday_earnings.png');
const v3_mine_privilege = require('../images/v3_mine_privilege.png');
const v3_vip_icon = require('../images/v3_vip_icon.png');
let imgs = [v3_vip_icon, v3_invite, v3_ransaction_record, v3_message_center, v3_me_help, network_config];
let texts = ['会员中心', '邀请好友', '交易记录', '消息中心', '帮组&关于', '(测试)网络配置'];
let datas = [];
const {width} = Dimensions.get('window');

export default class MineScene extends Component {

    constructor(props) {
        super(props);
        datas = [];
    }

    componentWillMount() {
        for (let i = 0; i < imgs.length; i++) {
            datas.push({
                img: imgs[i],
                text: texts[i]
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.headStyle}>
                        <Image style={styles.headImg} source={headImg}/>
                        <Image style={{width: 15, height: 15, marginRight: 5}} source={vipImg}/>
                        <Text style={{fontSize: 11, color: 'white', flex: 1}}>147****1211</Text>
                        <Image style={{width: 25, height: 25}} source={icon_setting_white}/>
                    </View>
                    <View style={{backgroundColor: "#007EFF", paddingVertical: 10}}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontSize: 12}}>总资产（元)</Text>
                                <Image style={{marginLeft: 5, width: 12, height: 12}} source={v3_me_arrow_right}/>
                                <Image style={{marginLeft: 8, width: 20, height: 10}} source={v3_me_eye_open}/>
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: 10,
                                    color: 'white',
                                    fontSize: 23
                                }}>1,9999.00</Text>
                        </View>
                        <View style={{marginTop: 20, flexDirection: 'row',}}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'white'}}>0.00</Text>
                                    <Image style={{marginLeft: 5, width: 12, height: 12}} source={v3_me_arrow_right}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                    <Text style={{color: 'white', fontSize: 10}}>昨日预估待收收益(元)</Text>
                                    <Image style={{marginLeft: 5, width: 15, height: 15}}
                                           source={v3_yestoday_earnings}/>
                                </View>
                            </View>
                            <View style={{width: 0.5, backgroundColor: 'white', marginVertical: 5}}/>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>44.68</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                    <Text style={{color: 'white', fontSize: 10}}>累计收益(元)</Text>
                                    <Image style={{marginLeft: 5, width: 12, height: 12}} source={v3_me_arrow_right}/>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{marginVertical: 10, backgroundColor: 'white', paddingHorizontal: 10,}}>
                        <View style={{flexDirection: 'row', height: 60, paddingVertical: 10}}>
                            <View style={{justifyContent: 'center', flex: 1}}>
                                <Text style={{color: 'black', marginBottom: 8}}>账户余额(元)</Text>
                                <Text>89,3242.00</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#007CFF'}}>充值</Text>
                                <View
                                    style={{width: 0.5, height: 15, backgroundColor: "#e6e6e6", marginHorizontal: 10}}/>
                                <Text style={{color: 'black'}}>提现</Text>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>
                        <View style={{flexDirection: 'row', height: 60, paddingVertical: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <Image style={styles.imageStyle} source={v3_mine_loan}/>
                                <Text style={{color: 'black', marginLeft: 10}}>我的出借</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'black'}}>{'0.00'}元</Text>
                                <Image style={{marginLeft: 5, width: 12, height: 12}} source={v3_me_arrows}/>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>

                        <View style={{flexDirection: 'row', height: 60,}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <Image style={styles.imageStyle} source={v3_mine_privilege}/>
                                <Text style={{color: 'black', marginLeft: 10}}>我的福利</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#FE6F4E'}}>{'9张优惠券'}元</Text>
                                <Image style={{marginLeft: 5, width: 12, height: 12}} source={v3_me_arrows}/>
                            </View>
                        </View>
                        <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>
                    </View>
                    <View style={{
                        flexWrap: 'wrap',
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginBottom: 15
                    }}>
                        {
                            datas.map((data, i) => {
                                return (

                                    <TouchableOpacity
                                        key={i + ""}
                                        activeOpacity={0.6}
                                        onPress={() => {
                                            alert("adsf");
                                            console.log("-----"+i);
                                        }}
                                    >
                                        <View
                                            style={{
                                                height: 95,
                                                width: width / 3,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <Image style={styles.imgContainer} source={data.img}/>
                                            <Text style={{marginTop: 15, fontSize: 12}}>{data.text}</Text>
                                        </View>
                                    </TouchableOpacity>

                                );
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        )

    }

    renderItem = (data, i) => {
        return (

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    alert("adsf");
                }}
            >
                <View
                    key={i + ""}
                    style={{
                        height: 95,
                        width: width / 3,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image style={styles.imgContainer} source={data.img}/>
                    <Text style={{marginTop: 15, fontSize: 12}}>{data.text}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7"
    },
    headStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007EFF',
        padding: 10
    },
    headImg: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    divideLineStyle: {
        color: '#e6e6e6',
        height: 0.5,
    },
    imageStyle: {
        width: 22,
        height: 22
    },
    imgContainer: {
        width: 22,
        height: 22,
    },


});
