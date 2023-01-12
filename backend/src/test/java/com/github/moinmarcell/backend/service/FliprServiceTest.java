package com.github.moinmarcell.backend.service;

import com.github.moinmarcell.backend.model.Flipr;
import com.github.moinmarcell.backend.model.FliprDTO;
import com.github.moinmarcell.backend.repo.FliprRepository;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class FliprServiceTest {

    IdService idService = mock(IdService.class);
    FliprRepository fliprRepository = mock(FliprRepository.class);
    LocalDateService localDateService = mock(LocalDateService.class);
    FliprService fliprService = new FliprService(fliprRepository, idService, localDateService);

    @Test
    void saveFlipr() {
        Flipr expected = new Flipr(
                "1",
                "Hallo",
                "Author",
                LocalDateTime.of(1, 1, 1, 1, 1)
        );

        FliprDTO fliprToSave = new FliprDTO(
                "Hallo",
                "Author"
        );

        when(fliprRepository.save(expected)).thenReturn(expected);
        when(idService.generateId()).thenReturn("1");
        when(localDateService.getDate()).thenReturn(LocalDateTime.of(1, 1, 1, 1, 1));

        Flipr actual = fliprService.saveFlipr(fliprToSave);

        assertEquals(actual, expected);
        verify(fliprRepository).save(expected);
    }

    @Test
    void getAllFliprs() {
        List<Flipr> expected = Collections.emptyList();

        when(fliprRepository.findAll()).thenReturn(expected);

        List<Flipr> actual = fliprService.getAllFliprs();

        assertEquals(actual, expected);
        verify(fliprRepository).findAll();
    }

    @Test
    void getFliprById() {
        String id = "1";
        Flipr expected = new Flipr("1", "Content", "Author", LocalDateTime.now());

        when(fliprRepository.findById(id)).thenReturn(Optional.of(expected));

        Flipr actual = fliprService.getFliprById(id);

        assertEquals(actual, expected);
        verify(fliprRepository).findById(id);
    }

    @Test
    void deleteFliprById() {
        Flipr fliprToDelete = new Flipr("1", "Content", "Author", LocalDateTime.now());
        fliprService.deleteFliprById(fliprToDelete.id());
        verify(fliprRepository).deleteById(fliprToDelete.id());
    }
}