package tn.isi.devweb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.Equipe;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.repoisitory.EquipeRepository;

import java.util.List;

@Service
public class EquipeService {
    @Autowired
    private EquipeRepository equipeService;

    public void addEquipe(Equipe e)
    {
        equipeService.save(e);
    }
    public void deleteEquipe(Long id)
    {
        equipeService.deleteById(id);
    }

    public Equipe showEquipe(Long id)
    {
       return equipeService.findById(id).get();
    }

  //jdida
    public Equipe updateEquipe(Equipe equipe) {
        return equipeService.save(equipe);
    }

    public List<Equipe> allEquipe()
    {
        return equipeService.findAll();
    }
}
