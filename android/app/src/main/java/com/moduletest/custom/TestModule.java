package com.moduletest.custom;

import android.content.Intent;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.moduletest.CustomActivity;

public class TestModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    TestModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show() {
        Toast.makeText(reactContext,"Hi from Android",Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void getDeviceName(Promise promise) {
        try {
            String android_id = Settings.Secure.getString(reactContext.getContentResolver(),Settings.Secure.ANDROID_ID);
            promise.resolve(android_id);
        } catch (Exception e) {
            promise.reject("Error",e);
        }
    }

    @ReactMethod
    public void NavigateToIntent() {
        Intent intent = new Intent(reactContext, CustomActivity.class);
        if (intent.resolveActivity(reactContext.getPackageManager()) != null) {
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            reactContext.startActivity(intent);
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "Custom";
    }
}
