package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.But;
import tn.isi.devweb.entities.Match;
import tn.isi.devweb.services.ButService;

import java.util.List;@CrossOrigin
@RestController
@RequestMapping("/but")
public class ButController {
    @Autowired
    private ButService butService;
    /*@PostMapping("/addBut")
    public void addBut(But but) {butService.saveBut(but);}
   */

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN') ")
    public void saveBut(@RequestBody But but) {butService.saveBut(but);}


    @GetMapping("/get/all")
    //@PreAuthorize("hasRole('ROLE_USER') ")
    public List<But> findall()
    {
      return   butService.allBut();
    }
}
