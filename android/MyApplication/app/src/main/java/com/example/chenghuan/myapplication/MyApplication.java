package com.example.chenghuan.myapplication;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by liuwei on 2017/9/21.
 */

public class MyApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

//        @Override
//        protected String getJSBundleFile() {
//            return CodePush.getJSBundleFile();
//        }

        @Override
        protected List<ReactPackage> getPackages() {
            // 3. Instantiate an instance of the CodePush runtime and add it to the list of
            // existing packages, specifying the right deployment key. If you don't already
            // have it, you can run "code-push deployment ls <appName> -k" to retrieve your key.
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage()
//                    new CodePush("ztoE7fzNzpbZqJbbgPCs913rYZAZfb9be4fe-9d7b-4c4b-890c-f09d71936705", MyApplication.this, BuildConfig.DEBUG)
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
