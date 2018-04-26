package com.admin.web.dto;

import java.io.Serializable;

public class HitSource implements Serializable {
    private static final long serialVersionUID = 1;

    private String device_model;
    private String app_gubun;
    private String os_version;
    private String ip;
    private String uuid;
    private String err_message;
    private String err_time;
    private String refer;
    private String err_name;
    private String app_ver;
    private String device_gubun;
    private String network_type;
    private String customer_id;

    public String getDevice_model() {
        return device_model;
    }

    public void setDevice_model(String device_model) {
        this.device_model = device_model;
    }

    public String getApp_gubun() {
        return app_gubun;
    }

    public void setApp_gubun(String app_gubun) {
        this.app_gubun = app_gubun;
    }

    public String getOs_version() {
        return os_version;
    }

    public void setOs_version(String os_version) {
        this.os_version = os_version;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getErr_message() {
        return err_message;
    }

    public void setErr_message(String err_message) {
        this.err_message = err_message;
    }

    public String getErr_time() {
        return err_time;
    }

    public void setErr_time(String err_time) {
        this.err_time = err_time;
    }

    public String getRefer() {
        return refer;
    }

    public void setRefer(String refer) {
        this.refer = refer;
    }

    public String getErr_name() {
        return err_name;
    }

    public void setErr_name(String err_name) {
        this.err_name = err_name;
    }

    public String getApp_ver() {
        return app_ver;
    }

    public void setApp_ver(String app_ver) {
        this.app_ver = app_ver;
    }

    public String getDevice_gubun() {
        return device_gubun;
    }

    public void setDevice_gubun(String device_gubun) {
        this.device_gubun = device_gubun;
    }

    public String getNetwork_type() {
        return network_type;
    }

    public void setNetwork_type(String network_type) {
        this.network_type = network_type;
    }

    public String getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(String customer_id) {
        this.customer_id = customer_id;
    }
}
