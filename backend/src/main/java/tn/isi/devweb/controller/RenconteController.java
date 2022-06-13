package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.entities.Rencontre;
import tn.isi.devweb.services.RencotreService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Rencontre")
public class RenconteController {
    @Autowired
    public RencotreService rencotreService;
    @PostMapping("/addRencontre")
    public void saveRencontre(@RequestBody Rencontre r)
    {
        rencotreService.createRencontre(r);
    }


    @GetMapping("/all")
    public List<Rencontre> allRencontre()
    {
        return rencotreService.getallRencontre();
    }
}
