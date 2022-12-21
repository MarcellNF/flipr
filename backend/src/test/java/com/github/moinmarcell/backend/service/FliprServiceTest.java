package com.github.moinmarcell.backend.service;

import com.github.moinmarcell.backend.model.Flipr;
import com.github.moinmarcell.backend.repo.FliprRepository;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class FliprServiceTest {

    FliprRepository fliprRepository = mock(FliprRepository.class);
    FliprService fliprService = new FliprService(fliprRepository);

    @Test
    void getAllFliprs() {
        List<Flipr> expected = Collections.emptyList();

        when(fliprRepository.findAll()).thenReturn(expected);
        List<Flipr> actual = fliprService.getAllFliprs();

        assertEquals(expected, actual);
        verify(fliprRepository).findAll();
    }
}