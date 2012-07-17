package com.capanicus.astfone;


//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Timer;




import android.app.Activity;
//import android.content.Context;
//import android.content.pm.PackageManager.NameNotFoundException;
//import android.content.res.Configuration;
//import android.content.res.Resources;
//import android.os.Build;
import android.os.Bundle;
//import android.provider.Settings.Secure;
import android.util.Log;
//import android.view.KeyEvent;
//import android.view.View;
//import android.view.ViewGroup;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
//import android.widget.ImageView;
import android.widget.LinearLayout;
//import android.widget.TabHost;
//import android.widget.TabWidget;



public class AstfoneActivity extends Activity {
	public static WebView mWebView;
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        //mWebView = new WebView(this);
        setContentView(R.layout.main);
        mWebView = (WebView) findViewById(R.id.myWebView);
        WebSettings settings = mWebView.getSettings();
        //setContentView(mWebView);
       // mWebView.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);     
        //WebSettings setting = mWebView.getSettings();


	
        settings.setJavaScriptEnabled(true);
        
        mWebView.setHorizontalScrollBarEnabled(false);
        mWebView.setVerticalScrollBarEnabled(false);
        mWebView.setWebViewClient(new WebViewClient() {
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
        return true;
        }
        });
        mWebView.setWebChromeClient(new WebChromeClient() {

    		@Override
    		public boolean onJsAlert(WebView view, String url, String message,
    				JsResult result) {
    			// Required functionality here
    			return super.onJsAlert(view, url, message, result);
    		}
    	});
        mWebView.loadUrl("file:///android_asset/app/rootview/view/astfone.html");
    }
    
    
    
}