package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.Arbitre;
import tn.isi.devweb.services.ArbitreService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/arbitre")
public class ArbitreController {
    @Autowired
    private ArbitreService arbitreController;
    @PostMapping("/addArbitre")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public void saveArbitre(@RequestBody Arbitre a)
    {
        arbitreController.addArbitre(a);
    }

    @PutMapping("/updateArbitre")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public ResponseEntity<Arbitre> updateArbitre(@RequestBody Arbitre arbitre) {
        Arbitre updateArbiter = arbitreController.updateArbitre(arbitre);
        return new ResponseEntity<>(updateArbiter, HttpStatus.OK);
    }

    @DeleteMapping("/deleteArbitre/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public void deleteArbitre(@PathVariable  Long id)
    {
        arbitreController.deleteArbitre(id);
    }
    @GetMapping("/getArbitre/{id}")
    //@PreAuthorize("hasRole('ROLE_USER') ")
    public  Arbitre getArbitre(@PathVariable Long id)
    {
        return arbitreController.showArbitre(id);
    }
    @GetMapping("/allArbitre")

    //@PreAuthorize("hasRole('ROLE_USER') ")

    public List<Arbitre> allArbitre()
    {
        return arbitreController.allArbitre();
    }
}
