package com.project.aayu.controller;

import com.project.aayu.database.EnglishPlantDatabaseLoad;
import com.project.aayu.database.MapDatabaseLoad;
import com.project.aayu.database.SinhalaPlantDatabaseLoad;
import com.project.aayu.database.TamilPlantDatabaseLoad;
import com.project.aayu.model.Map;
import com.project.aayu.model.Plant;
import com.project.aayu.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AayuManager implements AayuInterface{

    // create aayu manager constructor for load plant database
    public AayuManager(){
        EnglishPlantDatabaseLoad englishPlantDatabaseLoad = new EnglishPlantDatabaseLoad();
        englishPlantDatabaseLoad.EnglishPlantDatabaseLoad();
    }

    @Override
    public List<Plant> viewEnglishPlantData() {
        List<Plant> englishDataSet = new ArrayList<>();

        for (Plant englishData : EnglishPlantDatabaseLoad.plantEnglishDatabase){
            englishDataSet.add(englishData);
        }
        return englishDataSet;
    }

    //Aayu sinhala plant information
    @Override
    public List<Plant> viewSinhalaPlantData() {
        List<Plant> sinhalaDataSet = new ArrayList<>();

        for (Plant sinhalaData : SinhalaPlantDatabaseLoad.plantSinhalaDatabase){
            sinhalaDataSet.add(sinhalaData);
        }
        return sinhalaDataSet;
    }


    //Aayu tamil plant information
    @Override
    public List<Plant> viewTamilPlantData() {
        List<Plant> tamilDataSet = new ArrayList<>();

        for (Plant tamilData : TamilPlantDatabaseLoad.plantTamilDatabase){
            tamilDataSet.add(tamilData);
        }
        return tamilDataSet;
    }



    //add location details
    @Override
    public void addLocation(Map newLocation) {
        MapDatabaseLoad mapDatabaseLoad = new MapDatabaseLoad();
        mapDatabaseLoad.newLocationDataset(newLocation.getLocationId(),newLocation.getPlantName(),newLocation.getLatitude(),newLocation.getLongitude(),newLocation.getUser());
    }

    //view location details
    @Override
    public List<Map> viewLocation(String plantLocationName) {
        // create temp array list
        List<Map> locationDataSet = new ArrayList<>();
        // create map database object
        MapDatabaseLoad mapDatabaseLoad = new MapDatabaseLoad();
        for (Map locationDB : mapDatabaseLoad.mapDatabaseLoad()){
            // check plant is in the database
            if (locationDB.getPlantName().equalsIgnoreCase(plantLocationName)) {
                // add plant to the plant database
                locationDataSet.add(locationDB);
            }
        }

        return locationDataSet;
    }

    //add user
    @Override
    public void addNewUser(int userId, String userName, String userEmail) {

    }

    //get user
    @Override
    public List<User> viewUser() {
        return null;
    }


    
}
