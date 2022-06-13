package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.Arbitre;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.services.PoolService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/Pool")
public class PoolController {

    @Autowired
    public PoolService poolService;
    @PostMapping("/addPool")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public void savePool(@RequestBody Pool p)
    {
        poolService.createPool(p);
    }

    @GetMapping("/get/all")
    public List<Pool> allPool()
    {
        return poolService.getallPool();
    }

//jdida
@PutMapping("/updatePool")
@PreAuthorize("hasRole('ROLE_ADMIN') ")
public ResponseEntity<Pool> updatePool(@RequestBody Pool pool) {
    Pool updatePoola = poolService.updatePool(pool);
    return new ResponseEntity<>(updatePoola, HttpStatus.OK);
}





    //jdida
    @DeleteMapping("/deletePool/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public void deletePool(@PathVariable  Long id)
    {
        poolService.deletePool(id);
    }


}
