package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.Arbitre;
import tn.isi.devweb.entities.Equipe;
import tn.isi.devweb.services.EquipeService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/equipe")
public class EquipeController {
    @Autowired
    private EquipeService equipeController;
    @PostMapping("/addEquipe")
    public void  saveEquipe(@RequestBody Equipe e)
    {
        equipeController.addEquipe(e);
    }

    @PutMapping("/updateEquipe")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public ResponseEntity<Equipe> updateEquipe(@RequestBody Equipe equipe) {
        Equipe updateEq = equipeController.updateEquipe(equipe);
        return new ResponseEntity<>(updateEq, HttpStatus.OK);
    }


    @DeleteMapping("/deleteEquipe/{id}")
    public  void deleteEquipe(@PathVariable Long id)
    {
        equipeController.deleteEquipe(id);
    }
    @GetMapping("/getEquipe/{id}")
    public Equipe showEquipe(@PathVariable Long id)
    {
        return equipeController.showEquipe(id);
    }
    @GetMapping("/allEquipe")
    public List<Equipe> allEquipe()
    {
        return equipeController.allEquipe();
    }
}

