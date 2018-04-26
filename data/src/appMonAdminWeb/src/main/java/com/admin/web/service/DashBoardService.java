package com.admin.web.service;

import com.admin.web.dto.HitSource;
import org.elasticsearch.action.search.SearchResponse;

import java.util.List;

public interface DashBoardService {
    List<HitSource> getTableRealtime(String startDate, String endDate);
    SearchResponse getGrapeRealtime(String startDate, String endDate);
}
