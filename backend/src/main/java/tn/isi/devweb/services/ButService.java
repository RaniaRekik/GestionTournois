package tn.isi.devweb.services;

import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.But;
import tn.isi.devweb.entities.Match;
import tn.isi.devweb.repoisitory.ButRepository;

import java.util.List;

@Service
public class ButService {
    @Autowired
    private ButRepository butRepository;

    public void saveBut(But but)
    {
        butRepository.save(but);
    }

    public List<But> allBut()
    {
       return butRepository.findAll();
    }
}
