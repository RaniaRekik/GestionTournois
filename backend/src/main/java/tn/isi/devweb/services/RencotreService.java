package tn.isi.devweb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.entities.Rencontre;
import tn.isi.devweb.repoisitory.RencontreRepository;

import java.util.List;

@Service
public class RencotreService {
    @Autowired
    private RencontreRepository rencontreRepository;

    public void createRencontre(Rencontre r)
    {
        rencontreRepository.save(r);
    }


    public List<Rencontre> getallRencontre()
    {
        return  rencontreRepository.findAll();
    }
}
